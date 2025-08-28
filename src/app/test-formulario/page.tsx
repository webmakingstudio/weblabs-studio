'use client';

import { useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default function TestFormularioPage() {
  const [testResults, setTestResults] = useState<string[]>([]);
  const [apiResponse, setApiResponse] = useState<any>(null);

  const addTestResult = (result: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${result}`]);
  };

  const testJavaScript = () => {
    try {
      addTestResult('🧪 Test 1: JavaScript básico');
      console.log('✅ JavaScript funcionando correctamente');
      addTestResult('✅ JavaScript funcionando correctamente');
      
      // Test de alert
      addTestResult('🧪 Test 2: Alert funcionando');
      alert('Test de alert funcionando');
      addTestResult('✅ Alert funcionando correctamente');
      
    } catch (error) {
      addTestResult(`❌ Error en JavaScript: ${error}`);
    }
  };

  const testFormElements = () => {
    try {
      addTestResult('🧪 Test 3: Verificando elementos del formulario');
      
      // Verificar que el formulario existe
      const form = document.querySelector('form');
      if (form) {
        addTestResult('✅ Formulario encontrado en el DOM');
        console.log('Formulario:', form);
      } else {
        addTestResult('❌ No se encontró formulario en el DOM');
      }

      // Verificar campos específicos
      const nombreField = document.querySelector('input[name="nombre"]');
      const emailField = document.querySelector('input[name="email"]');
      const mensajeField = document.querySelector('textarea[name="mensaje"]');
      const privacidadCheckbox = document.querySelector('input[name="consentimientoPrivacidad"]');
      const submitButton = document.querySelector('button[type="submit"]');

      addTestResult(`✅ Campo nombre: ${nombreField ? 'Encontrado' : 'No encontrado'}`);
      addTestResult(`✅ Campo email: ${emailField ? 'Encontrado' : 'No encontrado'}`);
      addTestResult(`✅ Campo mensaje: ${mensajeField ? 'Encontrado' : 'No encontrado'}`);
      addTestResult(`✅ Checkbox privacidad: ${privacidadCheckbox ? 'Encontrado' : 'No encontrado'}`);
      addTestResult(`✅ Botón submit: ${submitButton ? 'Encontrado' : 'No encontrado'}`);

    } catch (error) {
      addTestResult(`❌ Error verificando elementos: ${error}`);
    }
  };

  const testFormValidation = () => {
    try {
      addTestResult('🧪 Test 4: Verificando validación del formulario');
      
      const form = document.querySelector('form') as HTMLFormElement;
      if (!form) {
        addTestResult('❌ No hay formulario para validar');
        return;
      }

      // Simular envío sin datos
      const submitEvent = new Event('submit', { cancelable: true });
      form.dispatchEvent(submitEvent);
      
      addTestResult('✅ Evento submit disparado');
      
      // Verificar si hay errores de validación
      setTimeout(() => {
        const errors = document.querySelectorAll('.text-red-600, .text-red-400');
        addTestResult(`✅ Errores de validación encontrados: ${errors.length}`);
        errors.forEach(error => {
          addTestResult(`   - ${error.textContent}`);
        });
      }, 100);

    } catch (error) {
      addTestResult(`❌ Error en validación: ${error}`);
    }
  };

  const testAPI = async () => {
    try {
      addTestResult('🧪 Test 5: Verificando API de contacto');
      
      const response = await fetch('/api/contact');
      const data = await response.json();
      
      setApiResponse(data);
      addTestResult(`✅ API responde: ${response.status} ${response.statusText}`);
      addTestResult(`✅ Configuración: ${data.emailConfig || 'No disponible'}`);
      addTestResult(`✅ Environment: ${data.environment || 'No disponible'}`);
      
    } catch (error) {
      addTestResult(`❌ Error en API: ${error}`);
    }
  };

  const testResend = async () => {
    try {
      addTestResult('🧪 Test 6: Verificando Resend');
      
      const response = await fetch('/api/test-email', { method: 'POST' });
      const data = await response.json();
      
      if (data.success) {
        addTestResult(`✅ Resend funciona: ${data.messageId}`);
      } else {
        addTestResult(`❌ Resend falló: ${data.error}`);
      }
      
    } catch (error) {
      addTestResult(`❌ Error en Resend: ${error}`);
    }
  };

  const clearResults = () => {
    setTestResults([]);
    setApiResponse(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            🧪 Test del Formulario de Contacto
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Diagnóstico completo del sistema de formularios
          </p>
        </div>

        {/* Panel de Tests */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Panel Izquierdo - Tests */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              🔬 Tests de Diagnóstico
            </h2>
            
            <div className="space-y-4">
              <button
                onClick={testJavaScript}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                🧪 Test 1: JavaScript Básico
              </button>
              
              <button
                onClick={testFormElements}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                🧪 Test 2: Elementos del Formulario
              </button>
              
              <button
                onClick={testFormValidation}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                🧪 Test 3: Validación del Formulario
              </button>
              
              <button
                onClick={testAPI}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                🧪 Test 4: API de Contacto
              </button>
              
              <button
                onClick={testResend}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                🧪 Test 5: Resend
              </button>
              
              <button
                onClick={clearResults}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                🗑️ Limpiar Resultados
              </button>
            </div>
          </div>

          {/* Panel Derecho - Resultados */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              📊 Resultados de los Tests
            </h2>
            
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 h-96 overflow-y-auto">
              {testResults.length === 0 ? (
                <p className="text-zinc-500 dark:text-zinc-400 text-center">
                  Ejecuta algún test para ver los resultados
                </p>
              ) : (
                <div className="space-y-2">
                  {testResults.map((result, index) => (
                    <div key={index} className="text-sm font-mono">
                      {result}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Respuesta de la API */}
        {apiResponse && (
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              📡 Respuesta de la API
            </h2>
            <pre className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 overflow-x-auto text-sm">
              {JSON.stringify(apiResponse, null, 2)}
            </pre>
          </div>
        )}

        {/* Formulario de Contacto */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
            📝 Formulario de Contacto (Para Testing)
          </h2>
          
          <ContactForm 
            onSuccess={(data) => {
              addTestResult(`✅ Formulario enviado exitosamente: ${data.nombre}`);
              console.log('✅ Formulario enviado desde test:', data);
            }}
            onError={(error) => {
              addTestResult(`❌ Error en formulario: ${error}`);
              console.error('❌ Error en formulario desde test:', error);
            }}
          />
        </div>

        {/* Instrucciones */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 mt-8">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            📋 Instrucciones de Uso
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800 dark:text-blue-200">
            <li>Ejecuta los tests en orden del 1 al 5</li>
            <li>Observa los resultados en el panel derecho</li>
            <li>Llena y envía el formulario de contacto</li>
            <li>Revisa la consola del navegador (F12)</li>
            <li>Comparte los resultados para diagnóstico</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
