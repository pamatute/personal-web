import Layout from '../components/Layout';
import ConsultingForm from '../components/ConsultingForm';

export default function Consulting() {
  return (
    <Layout title="Consultoría - Mi Sitio Web Personal">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Servicios de Consultoría</h1>
        <div className="prose lg:prose-xl mb-8">
          <p>
            Ofrezco servicios de consultoría personalizados para ayudar a tu empresa a alcanzar sus objetivos 
            de crecimiento y marketing. Con mi experiencia en growth hacking, marketing digital y análisis de datos, 
            puedo ayudarte a desarrollar estrategias efectivas y a implementar soluciones que impulsen tu negocio.
          </p>
          <h2>Mis servicios incluyen:</h2>
          <ul>
            <li>Auditoría de marketing digital</li>
            <li>Desarrollo de estrategias de growth hacking</li>
            <li>Optimización de conversión (CRO)</li>
            <li>Análisis de datos y KPIs</li>
            <li>Implementación de herramientas de automatización</li>
          </ul>
          <p>
            Si estás interesado en trabajar juntos, por favor completa el formulario a continuación y me pondré 
            en contacto contigo para discutir cómo puedo ayudarte a alcanzar tus objetivos.
          </p>
        </div>
        <ConsultingForm />
      </div>
    </Layout>
  );
}