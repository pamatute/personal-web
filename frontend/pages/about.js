import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="Sobre Mí - Mi Sitio Web Personal">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Sobre Mí</h1>
        <img src="/images/profile.jpg" alt="Mi foto de perfil" className="w-64 h-64 rounded-full mx-auto mb-6" />
        <div className="prose lg:prose-xl">
          <p>
            Soy un experto en marketing digital y growth hacking con más de 10 años de experiencia en la industria. 
            Mi pasión es ayudar a las empresas a crecer y alcanzar su máximo potencial utilizando estrategias 
            innovadoras y basadas en datos.
          </p>
          <h2>Experiencia</h2>
          <ul>
            <li>Consultor de Marketing Digital (2018 - presente)</li>
            <li>Jefe de Growth en StartupX (2015 - 2018)</li>
            <li>Especialista en SEO en AgenciaY (2012 - 2015)</li>
          </ul>
          <h2>Habilidades</h2>
          <ul>
            <li>Growth Hacking</li>
            <li>SEO y SEM</li>
            <li>Analítica Web</li>
            <li>Email Marketing</li>
            <li>Optimización de Conversión (CRO)</li>
          </ul>
          <h2>Educación</h2>
          <ul>
            <li>Máster en Marketing Digital, Universidad XYZ (2014)</li>
            <li>Licenciatura en Administración de Empresas, Universidad ABC (2011)</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}