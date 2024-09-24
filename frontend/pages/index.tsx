import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  const recentPosts = [
    { id: 1, title: 'Estrategias de Growth Hacking', date: '2023-05-01', excerpt: 'Descubre las últimas estrategias para impulsar el crecimiento de tu negocio de manera rápida y efectiva.', slug: 'estrategias-growth-hacking' },
    { id: 2, title: 'Optimización de Conversión', date: '2023-04-15', excerpt: 'Aprende a mejorar tus tasas de conversión con técnicas probadas y herramientas avanzadas de análisis.', slug: 'optimizacion-conversion' },
  ];

  const featuredProjects = [
    { id: 1, title: 'Campaña de Marketing Digital', description: 'Estrategia completa para aumentar la visibilidad online y generar leads cualificados.', tags: ['Marketing', 'Digital'], slug: 'campana-marketing-digital' },
    { id: 2, title: 'Análisis de Datos de Cliente', description: 'Proyecto de análisis profundo para entender el comportamiento del cliente y mejorar la retención.', tags: ['Análisis', 'Datos'], slug: 'analisis-datos-cliente' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
      <header className="mb-8 sm:mb-12 lg:mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Bienvenido a Mi Sitio Web Personal</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Soy un experto en marketing, growth y consultoría. Explora mis proyectos y artículos para aprender más sobre estrategias de crecimiento y marketing digital.
        </p>
      </header>

      <section className="mb-8 sm:mb-12 lg:mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0">Artículos Recientes</h2>
          <Link href="/blog" className="text-primary hover:underline">
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {recentPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold hover:text-primary">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm sm:text-base text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <div className="p-4 sm:p-6 pt-0">
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link href={`/blog/${post.slug}`}>
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0">Proyectos Destacados</h2>
          <Link href="/projects" className="text-primary hover:underline">
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold hover:text-primary">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs sm:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <div className="p-4 sm:p-6 pt-0">
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link href={`/projects/${project.slug}`}>
                    Ver proyecto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}