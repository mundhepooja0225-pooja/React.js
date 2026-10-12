import { createRoot } from "react-dom/client";


const root = createRoot(document.getElementById('root'));
let ele = <h2>hello</h2>

let newElement = (
  <div>
    <h2>Heading</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quaerat eum inventore rerum culpa reprehenderit accusamus optio modi quidem deleniti sit voluptatum perferendis, aliquid ullam voluptatem. Atque quae fugiat ex.</p>
  </div>
)
root.render(newElement);

const demo = createRoot(document.getElementById("demo"));
demo.render(ele);

function MyComp() {
  return(
    <div>
      <h1>heading1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio obcaecati adipisci eius ullam dignissimos accusantium explicabo magnam quis dicta totam debitis tenetur ratione praesentium quo, unde odio atque eveniet doloribus!</p>
    </div>
  );
}

function NewComp() {
  return (
    <ul>
      <li>Java</li>
      <li>React</li>
      <li>SQL</li>
    </ul>
  );
}

root.render(
  <>
  <MyComp/>
  <NewComp/>
  <ExternalComp/>
  </>
)
