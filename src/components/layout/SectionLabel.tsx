export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="label-mono text-[color:var(--acid)]">{index}</span>
      <span className="h-px w-10 bg-[color:var(--hair)]" />
      <span className="label-mono">{title}</span>
    </div>
  );
}
