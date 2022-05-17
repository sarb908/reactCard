import Card from "./components/Card";

function App() {
  let mobilesOS = ["Android", "Blackberry", "Iphone", "Windows phone"];
  let companys = ["Samsung", "HTC", "MicroMax", "Apple"];
  return (
    <div>
      <Card title="Mobile Operating System" items={mobilesOS} />
      <Card title="Mobile Manufactutrers" items={companys} />
    </div>
  );
}

export default App;
