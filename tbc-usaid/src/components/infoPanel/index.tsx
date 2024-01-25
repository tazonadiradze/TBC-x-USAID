import "../infoPanel/index.css";
import Text from "../common/text";
const backgroundImageText = [
  { title: "TBC x USAID ", id: 1 },
  { subTitle: "ტექნოლოგიური განათლებისთვის ", id: 2 },
];
const detaildInformation = [
  {
    description:
      "„ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.",
    link: "გაიგე მეტი ",
  },
];

function InfoPanel() {
  return (
    <div className="info-panel-wrapper">
      <div className="info-panel-background">
        <div className="info-panel-text">
          <Text size={"medium"} type={"default"}>
            {backgroundImageText.map(({ title, subTitle, id }) => {
              return (
                <div key={id}>
                  <div>{title}</div>
                  <div>{subTitle}</div>
                </div>
              );
            })}
          </Text>
        </div>
      </div>
      <div>
        <Text size={"small"} type={"default"}>
          {detaildInformation.map(({ description, link }) => {
            return (
              <div className="info-panel-description">
                <div className="info-panel-content">{description}</div>
                <div className="link">{link}</div>
              </div>
            );
          })}
        </Text>
      </div>
    </div>
  );
}

export default InfoPanel;
