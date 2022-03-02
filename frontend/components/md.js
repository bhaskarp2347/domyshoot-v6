import Markdown from "markdown-to-jsx"

const Md = ({ className, children, overrides: overrides = {} }) => {
  return (
    <Markdown
      options={{
        overrides: {
          ...{
            p: {
              props: {
                className: "font-20 mb-48",
              },
            },
            strong: {
              props: {
                className: "font-24 font-bold",
              },
            },
          },
          ...overrides
        },
      }}
      className={className}
    >
      {children}
    </Markdown>
  )
}

export default Md
