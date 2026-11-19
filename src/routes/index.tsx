import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { ServicesSection } from "@/components/site/ServicesSection";
import { Differentials } from "@/components/site/Differentials";
import { BookingSection } from "@/components/site/BookingSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { servicesQuery } from "@/lib/services";

const TITLE =
  "BOX 301 - Estética Automotiva | Carazinho - RS (20% OFF Motoristas Guri)";
const DESCRIPTION =
  "Lavagem simples e com detalhamento a partir de R$ 50, enceramento, higienização e polimento em Carazinho - RS. 20% de desconto exclusivo para motoristas Guri. Agende pelo WhatsApp (54) 99698-6899.";

export const WHATSAPP_NUMBER = "5554996986899";
export const WHATSAPP_DISPLAY = "(54) 99698-6899";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Vi o site da BOX 301 Estética Automotiva em Carazinho e gostaria de agendar um horário."
)}`;

export const GURI_PROMO = {
  badge: "PROMOÇÃO EXCLUSIVA",
  discountText: "20% de desconto",
  audience: "para motoristas do app Guri",
  description:
    "Condição especial para motoristas parceiros Guri em Carazinho - RS. Consulte os serviços participantes e garanta seu horário.",
  imageSrc: "/media/promo-guri-20.jpg",
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Sou motorista do app Guri em Carazinho e quero aproveitar os 20% de desconto da BOX 301."
  )}`,
};

export const MEDIA_GALLERY = {
  beforeAfterImage: "/media/limpeza-detalhada-antes-depois.jpg",
  serviceVideos: [
    {
      id: "detalhamento-traseira",
      title: "Detalhamento de acabamento e emblemas",
      src: "/media/video_1.mp4",
    },
    {
      id: "lavagem-rodas-espuma",
      title: "Limpeza técnica de rodas e caixa de roda",
      src: "/media/video_2.mp4",
    },
    {
      id: "detalhamento-grade-emblema",
      title: "Detalhamento com pincel e espuma ativa",
      src: "/media/video_3.mp4",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(servicesQuery),
  component: Index,
});

function scrollToBooking() {
  document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
}

function Index() {
  const { data: services } = useSuspenseQuery(servicesQuery);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [carSize, setCarSize] = useState<string | null>(null);
  const [stepRequest, setStepRequest] = useState(0);

  return (
    <div
      className="min-h-screen"
      data-whatsapp={WHATSAPP_NUMBER}
      data-guri-discount="20%"
    >
      <SiteHeader onBook={scrollToBooking} />
      <main>
        <Hero onBook={scrollToBooking} />
        <ServicesSection
          services={services}
          onChoose={(id, size) => {
            setServiceId(id);
            if (size) setCarSize(size);
            setStepRequest((n) => n + 1);
            scrollToBooking();
          }}
        />
        <Differentials />
        <BookingSection
          services={services}
          serviceId={serviceId}
          onServiceChange={setServiceId}
          carSize={carSize}
          onCarSizeChange={setCarSize}
          stepRequest={stepRequest}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
