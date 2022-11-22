import Card from "react-bootstrap/Card";

function JumbotronComponent() {
  return (
    <Card className="bg-dark text-white jumbotron">
      <Card.Img
        src="https://images.unsplash.com/photo-1577985051167-0d49eec21977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2978&q=80"
        alt="Card image"
      />
      <Card.ImgOverlay className="cardText">
        <Card.Text>
          <div className="title">STRIVEBOOKS</div>
        </Card.Text>
        <div>
          “Reality doesn’t always give us the life that we desire, but we can
          always find what we desire between the pages of books.” ―Adelise M.
          Cullens
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default JumbotronComponent;
