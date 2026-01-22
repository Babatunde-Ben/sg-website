import Link from 'next/link'
import React from 'react'
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const ContactCard = () => {
    const emailAddress   = 'StephanieGeorge@example.com'
  return (
    <form className='bg-[#1E120A] text-[#EDD8CA] py-16 px-24'>
        <div className='flex items-center justify-between mb-20'>
            <div>
        <h3 className='text-white text-4xl font-bold mb-4'>Get in Touch</h3>
        <p className='text-lg'>For bookings, collaborations, or media inquiries let’s connect.</p>

            </div>
            <Link href={`mailto:${emailAddress}`} className='bg-[#26170D] text-white text-lg font-semibold py-4 px-8 rounded-lg'>
            {emailAddress}
            </Link>
        </div>
        
        <FieldSet>
      <FieldGroup className="grid gap-x-6 gap-y-20 mb-14  md:grid-cols-2">
        
        <Field>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <Input id="fullName" type="text"  />
        
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
         
          <Input id="email" type="email"  />
        </Field>
    
        <Field>
            <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
            <Input id="phoneNumber" type="tel"  />
        </Field>
        <Field>
            <FieldLabel htmlFor="organization">Organization</FieldLabel>
            <Input id="organization" type="text"  />
        </Field>
        <Field>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Textarea id="message"  />
        </Field>

      </FieldGroup>
        <Field orientation="responsive">
              <Button type="submit" className='h-16'>Submit</Button>
            
            </Field>
    </FieldSet>
        
    </form>
  )
}

export default ContactCard
