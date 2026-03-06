'use client'

import { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    asunto: '',
    mensaje: ''
  })
  
  const [errors, setErrors] = useState({})
  const [recaptchaValue, setRecaptchaValue] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Nombre validation
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }
    
    // Teléfono validation
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido'
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/.test(formData.telefono)) {
      newErrors.telefono = 'Ingresa un teléfono válido'
    }
    
    // Correo validation
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Ingresa un email válido'
    }
    
    // Asunto validation
    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es requerido'
    }
    
    // Mensaje validation
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido'
    }
    
    // reCAPTCHA validation
    if (!recaptchaValue) {
      newErrors.recaptcha = 'Por favor completa el reCAPTCHA'
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      // Scroll to top of form to show errors
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    
    setIsSubmitting(true)
    
    // Here you would send the data to your backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitStatus({
        type: 'success',
        message: '¡Mensaje enviado con éxito! Te contactaremos pronto.'
      })
      
      // Reset form
      setFormData({
        nombre: '',
        telefono: '',
        correo: '',
        asunto: '',
        mensaje: ''
      })
      setRecaptchaValue(null)
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Only render reCAPTCHA if site key exists
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  return (
    <div className="bg-gray-100 p-6 md:p-8 lg:p-10 rounded-xl">
      <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
        Envíanos un mensaje
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Error Summary */}
        {Object.keys(errors).length > 0 && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="font-medium">Por favor corrige los siguientes errores:</p>
            <ul className="list-disc list-inside text-sm mt-1">
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-black font-medium mb-2">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border ${
              errors.nombre ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[#012758] text-black`}
            placeholder="Juan Pérez González"
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className="block text-black font-medium mb-2">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border ${
              errors.telefono ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[#012758] text-black`}
            placeholder="+56 9 1234 5678"
          />
          {errors.telefono && (
            <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
          )}
        </div>

        {/* Correo */}
        <div>
          <label htmlFor="correo" className="block text-black font-medium mb-2">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border ${
              errors.correo ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[#012758] text-black`}
            placeholder="juan.perez@ejemplo.com"
          />
          {errors.correo && (
            <p className="text-red-500 text-sm mt-1">{errors.correo}</p>
          )}
        </div>

        {/* Asunto */}
        <div>
          <label htmlFor="asunto" className="block text-black font-medium mb-2">
            Asunto <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border ${
              errors.asunto ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[#012758] text-black`}
            placeholder="Consulta sobre productos"
          />
          {errors.asunto && (
            <p className="text-red-500 text-sm mt-1">{errors.asunto}</p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="mensaje" className="block text-black font-medium mb-2">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-3 rounded-lg bg-white border ${
              errors.mensaje ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[#012758] text-black`}
            placeholder="Escribe tu mensaje aquí..."
          />
          {errors.mensaje && (
            <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
          )}
        </div>

        {/* reCAPTCHA */}
        {recaptchaSiteKey && (
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={recaptchaSiteKey}
              onChange={(value) => setRecaptchaValue(value)}
            />
          </div>
        )}
        {errors.recaptcha && (
          <p className="text-red-500 text-sm text-center">{errors.recaptcha}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg text-white font-bold text-lg transition ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[#d3751b] hover:bg-[#e99b4f]'
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {/* Status Message */}
        {submitStatus && (
          <div className={`p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  )
}