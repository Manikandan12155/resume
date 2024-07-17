import { Button } from "primereact/button";
import { Card } from "primereact/card";

export interface CardData {
  image: string;
  title: string;
  subTitle: string;
  frontEnd: string;
  middleware: string;
  database: string;
  plugins: string;
  duration: string;
}

export const cardTemplate = (card: CardData) => {
  const header = <img alt="Card" src={card.image} />;
  const footer = (
    <>
      <Button
        label="Learn More..."
        className="LearnMoreButton"
        icon="pi pi-external-link"
      />
    </>
  );

  return (
    <div className="card flex justify-content-center">
      <Card
        title={card.title}
        subTitle={card.subTitle}
        footer={footer}
        header={header}
      >
        <p className="m-0">
          <b>{"Front End   :     "}</b>
          {card.frontEnd}
        </p>
        <p className="m-0">
          <b>{"Middleware  :     "}</b>
          {card.middleware}
        </p>
        <p className="m-0">
        <b>{"Database    :     "}</b>
          {card.database}
        </p>
        <p className="m-0">
        <b>{"Plugins     :     "}</b>
          {card.plugins}
        </p>
        <p className="m-0">
        <b> {"Duration    :     "}</b>
          {card.duration}
        </p>
      </Card>
    </div>
  );
};
