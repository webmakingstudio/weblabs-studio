import { useState, useCallback } from 'react';

interface FormData {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  servicio: string;
  mensaje: string;
  consentimientoPrivacidad: boolean;
  consentimientoMarketing: boolean;
  consentimientoCookies: boolean;
}

interface FormErrors {
  [key: string]: string;
}

interface UseContactFormReturn {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  validateForm: () => boolean;
  handleSubmit: (e: React.FormEvent, onSubmit?: (data: FormData) => Promise<void>) => Promise<void>;
  resetForm: () => void;
  setFieldError: (field: string, error: string) => void;
  clearFieldError: (field: string) => void;
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    servicio: '',
    mensaje: '',
    consentimientoPrivacidad: false,
    consentimientoMarketing: false,
    consentimientoCookies: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    }

    if (!formData.consentimientoPrivacidad) {
      newErrors.consentimientoPrivacidad = 'Debes aceptar la política de privacidad';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (
    e: React.FormEvent, 
    onSubmit?: (data: FormData) => Promise<void>
  ) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Simular envío del formulario por defecto
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      setSubmitStatus('success');
      
      // Reset form after success
      setFormData({
        nombre: '',
        email: '',
        empresa: '',
        telefono: '',
        servicio: '',
        mensaje: '',
        consentimientoPrivacidad: false,
        consentimientoMarketing: false,
        consentimientoCookies: false,
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  const resetForm = useCallback(() => {
    setFormData({
      nombre: '',
      email: '',
      empresa: '',
      telefono: '',
      servicio: '',
      mensaje: '',
      consentimientoPrivacidad: false,
      consentimientoMarketing: false,
      consentimientoCookies: false,
    });
    setErrors({});
    setSubmitStatus('idle');
  }, []);

  const setFieldError = useCallback((field: string, error: string) => {
    setErrors(prev => ({ ...prev, [field]: error }));
  }, []);

  const clearFieldError = useCallback((field: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    validateForm,
    handleSubmit,
    resetForm,
    setFieldError,
    clearFieldError,
  };
}

// Hook específico para formularios de newsletter
export function useNewsletterForm() {
  const [email, setEmail] = useState('');
  const [consentimiento, setConsentimiento] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !consentimiento) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setEmail('');
      setConsentimiento(false);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [email, consentimiento]);

  return {
    email,
    setEmail,
    consentimiento,
    setConsentimiento,
    isSubmitting,
    submitStatus,
    handleSubmit,
  };
}

// Hook para formularios de consulta rápida
export function useQuickContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    consentimientoPrivacidad: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim() || !formData.consentimientoPrivacidad) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({
        nombre: '',
        email: '',
        mensaje: '',
        consentimientoPrivacidad: false,
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }, []);

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  };
}
