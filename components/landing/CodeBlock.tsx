interface CodeBlockProps {
  children: string;
}

export const CodeBlock = ({ children }: CodeBlockProps) => {
  return (
    <div className="mt-6 bg-terminal rounded-lg px-4 py-3 font-mono text-sm inline-block">
      <code className="text-terminal-foreground">{children}</code>
    </div>
  );
};
