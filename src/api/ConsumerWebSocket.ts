const ConsumeMessages = () => {
  const ws = new WebSocket("ws://127.0.0.1:3000");

  ws.onopen = function () {
    console.log("WebSocket connection established");
  };
  ws.onerror = function (event: Event) {
    console.log("ws Error: ", event);
  };

  ws.onclose = function (event: Event) {
    console.log("ws closed: ", event);
  };
  return ws;
};

export default ConsumeMessages;