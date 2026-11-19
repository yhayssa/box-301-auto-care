import { CalendarClock, ScanSearch, ListChecks, Percent, MessageCircle } from "lucide-react";
import polimento from "@/assets/portfolio-polimento.jpg.asset.json";
import interior from "@/assets/portfolio-interior.jpg.asset.json";
import rodas from "@/assets/portfolio-rodas.jpg.asset.json";

const WHATSAPP_NUMBER = "5554996986899";
const GURI_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Sou motorista do app Guri em Carazinho e quero aproveitar os 20% de desconto da BOX 301."
)}`;

const ITEMS = [
  {
    icon: CalendarClock,
    title: "Hora marcada, sem fila",
    text: "Você escolhe o horário e seu carro é atendido na hora combinada. Nada de esperar a vez.",
  },
  {
    icon: ScanSearch,
    title: "Cuidado em cada detalhe",
    text: "Produtos adequados e técnica em cada etapa — das rodas ao acabamento interno.",
  },
  {
    icon: ListChecks,
    title: "Organizado para a sua rotina",
    text: "Agendamento online, confirmação pelo WhatsApp e prazo de entrega combinado.",
  },
];

const PHOTOS = [
  {
    src: polimento.url,
    label: "Antes e depois · Polimento",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/media/limpeza-detalhada-antes-depois.jpg",
    label: "Limpeza detalhada · Antes e depois",
    className: "",
  },
  {
    src: interior.url,
    label: "Higienização interna",
    className: "",
  },
  {
    src: rodas.url,
    label: "Lavagem de rodas",
    className: "",
  },
];

export function Differentials() {
  return (
    <>
      <section id="diferenciais" className="section-pad scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow">Por que o BOX 301</p>
          <h2 className="mt-2 max-w-2xl text-4xl md:text-5xl">
            <span className="text-silver">Um estúdio pensado para o seu carro e o seu tempo</span>
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {ITEMS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-brand p-6">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-2xl">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <div className="card-brand mt-6 flex flex-col gap-4 border-primary/50 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Percent className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Condição especial · Carazinho - RS
                </p>
                <h3 className="mt-1 text-2xl">
                  20% de desconto para motoristas do app Guri
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Chame no WhatsApp (54) 99698-6899 e garanta sua condição exclusiva como motorista parceiro.
                </p>
              </div>
            </div>
            <a
              href={GURI_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Pedir desconto no WhatsApp
            </a>
          </div>
        </div>
      </section>
      <section id="portfolio" className="section-pad scroll-mt-16 border-t">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow">Portfólio</p>
          <h2 className="mt-2 text-4xl md:text-5xl">
            <span className="text-silver">Antes e depois</span>
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Alguns dos trabalhos feitos no estúdio. Acompanhe mais no nosso Instagram.
          </p>
          <div className="mt-10 grid auto-rows-[220px] gap-3 md:grid-cols-3 md:auto-rows-[240px]">
            {PHOTOS.map((p) => (
              <figure
                key={p.label}
                className={`group relative overflow-hidden rounded-xl border border-primary/40 bg-muted ${p.className}`}
              >
                <img
                  src={p.src}
                  alt={p.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 text-sm font-semibold">
                  {p.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
