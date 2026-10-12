export default function NewComp() {
  
  const userName = 'ABCD'
  return (
    <>
    <h3>Hello from my new comp, (userName)</h3>
    <ChildComp
    name={userName}
    />
    </>
  )
}

function ChildComp({ name }) {
  return (
    <AnotherComp
    value={name}
    />
  )
}

function AnotherComp({value}) {
  return <h4>Hello again from AnotherComp</h4>
}
