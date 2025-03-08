import { Button, Title } from "@mantine/core";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Title order={1} className="text-blue-600 mb-4">
        Welcome to BethCO
      </Title>
      <Button color="orange" size="lg">
        Test Button
      </Button>
    </div>
  );
}

export default App;
