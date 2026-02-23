import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

export default function ContactoPage() {
  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  )
}