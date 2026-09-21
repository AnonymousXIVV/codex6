import { ArrowUpRight, Code2, FolderGit2, Workflow } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    href: "#services",
    kicker: "Services",
    icon: Code2,
    badgeClass: "bg-[#0071E3]/8 text-[#0071E3] border-[#0071E3]/20",
    title: "Everything built for you.",
    copy: "Web development, bespoke web applications, graphic identity, telephony CRMs, and Meta & Google ad acquisition systems.",
  },
  {
    href: "#work",
    kicker: "Projects",
    icon: FolderGit2,
    badgeClass: "bg-emerald-500/8 text-emerald-700 border-emerald-500/20",
    title: "Proven client work.",
    copy: "Explore storefronts, custom web applications, sales calling desks, and paid ad funnels engineered for measurable ROI.",
  },
  {
    href: "#process",
    kicker: "Process",
    icon: Workflow,
    badgeClass: "bg-purple-500/8 text-purple-700 border-purple-500/20",
    title: "Done-for-you delivery.",
    copy: "From discovery and Figma UI design to clean code, CRM telephony integrations, and turnkey campaign launch.",
  },
];

export function Highlights() {
  return (
    <section
      aria-label="Highlights"
      className="relative z-20 bg-background pt-7 pb-3 sm:pt-9"
    >
      <div className="shell grid gap-4 md:grid-cols-3">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.href} delay={i * 80}>
              <a
                href={item.href}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-black/[0.06] bg-white p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_6px_20px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-black/[0.12] hover:shadow-[0_2px_6px_rgba(0,0,0,0.03),0_16px_36px_rgba(0,0,0,0.05)] cursor-pointer overflow-hidden"
              >
                {/* Subtle top ambient sheen */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold tracking-wider uppercase ${item.badgeClass}`}>
                      <Icon className="size-3" />
                      <span>{item.kicker}</span>
                    </div>
                    <div className="size-8 rounded-full bg-[#F5F5F7] group-hover:bg-[#0071E3] group-hover:text-white text-neutral-500 flex items-center justify-center transition-colors duration-200">
                      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#111113] group-hover:text-[#0071E3] transition-colors">
                    {item.title}
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#5C5C60]">
                    {item.copy}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center text-[12px] font-medium text-[#0071E3]">
                  <span>Explore {item.kicker.toLowerCase()}</span>
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
