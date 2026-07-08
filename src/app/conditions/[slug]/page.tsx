import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { CONDITIONS, getConditionBySlug } from "@/lib/conditionsData";
import ConditionDetailContent from "./ConditionDetailContent";

export function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return {};
  return {
    title: `${condition.name} | Corona Hands-On Therapy`,
    description: condition.heroSubtitle,
  };
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return notFound();

  // Otras condiciones para la barra lateral "Related Conditions" (misma categoría primero).
  const related = CONDITIONS.filter((c) => c.slug !== condition.slug)
    .sort((a, b) => (a.category === condition.category ? -1 : 1) - (b.category === condition.category ? -1 : 1))
    .slice(0, 4);

  return (
    <>
      <Header />
      <ConditionDetailContent condition={condition} related={related} />
      <Footer />
    </>
  );
}
