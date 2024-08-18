const Section = ({ anchor, children }: { anchor: string, children: any }) => {
  return (
    <section className="min-h-screen relative">
      <a id={anchor} className="absolute -top-[70px]"></a>
      {children}
    </section>
  )
}

export default Section
