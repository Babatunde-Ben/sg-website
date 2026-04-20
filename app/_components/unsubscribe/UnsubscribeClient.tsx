"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constant";

interface UnsubscribeClientProps {
  email: string;
  token: string;
  initialDone?: boolean;
}

type Status = "idle" | "loading" | "success" | "error";

export default function UnsubscribeClient({
  email,
  token,
  initialDone = false,
}: UnsubscribeClientProps) {
  const [status, setStatus] = useState<Status>(
    initialDone ? "success" : "idle",
  );
  const [message, setMessage] = useState<string>(
    initialDone
      ? "You have been unsubscribed. We are sorry to see you go."
      : "",
  );

  async function onConfirm() {
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token }),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
      } | null;
      if (!response.ok || !result?.ok) {
        setStatus("error");
        setMessage(
          result?.message ??
            "Could not complete your unsubscribe. Please try again.",
        );
        return;
      }
      setStatus("success");
      setMessage(
        result.message ??
          "You have been unsubscribed. We're sorry to see you go.",
      );

      // Persist the done state in the URL so a refresh keeps the user on the
      // success view instead of bouncing them back to the confirm button.
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        url.searchParams.set("state", "done");
        window.history.replaceState({}, "", url.toString());
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again shortly.");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-10 text-center">
        <p className="text-tertiary-500 leading-relaxed md:text-lg">
          {message}
        </p>
        <p className="mt-3 text-sm text-tertiary-700">
          Removed: <span className="text-tertiary-400">{email}</span>
        </p>
        <Link
          href={ROUTES.HOME}
          className="mt-8 inline-block text-sm uppercase tracking-[0.22em] text-tertiary-600 hover:text-tertiary-400 transition-colors"
        >
          Return home
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-10 text-center">
      <p className="text-tertiary-500 leading-relaxed md:text-lg">
        We&apos;re sorry to see you go. Click the button below to remove{" "}
        <span className="text-tertiary-300 font-bold">{email}</span> from the
        newsletter list.
      </p>

      <div className="mt-8 flex flex-col items-center gap-3">
        <Button
          type="button"
          onClick={onConfirm}
          className="w-full max-w-xs"
          loading={status === "loading"}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Unsubscribing..." : "Confirm unsubscribe"}
        </Button>
        <Link
          href={ROUTES.HOME}
          className="text-sm uppercase tracking-[0.22em] text-tertiary-600 hover:text-tertiary-400 transition-colors"
        >
          Never mind
        </Link>
      </div>

      {status === "error" && message ? (
        <p className="mt-6 text-sm text-red-300">{message}</p>
      ) : null}
    </div>
  );
}
