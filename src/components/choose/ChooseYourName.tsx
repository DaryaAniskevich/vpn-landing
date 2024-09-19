import Input from "./Input";

type ChooseYourName = {
  data: {
    gender: "male" | "female";
    name: { title: string; first: string; last: string };
    location: {
      street: { number: number; name: string };
      city: string;
      state: string;
      country: string;
      postcode: number;
      coordinates: { latitude: string; longitude: string };
      timezone: { offset: string; description: string };
    };
    email: string;
    login: {
      uuid: string;
      username: string;
      password: string;
      salt: string;
      md5: string;
      sha1: string;
      sha256: string;
    };
    dob: { date: string; age: number };
    registered: { date: string; age: number };
    phone: string;
    cell: string;
    id: { name: string; value: string };
    picture: { large: string; medium: string; thumbnail: string };
    nat: string;
  }[];
};

function ChooseYourName({ data }: ChooseYourName) {
  return (
    <section className="px-4 pt-[40px] md:pt-[72px]">
      <h3 className="text-black title1 mb-4">
        Choose <span className="text-blue">your name</span>
      </h3>

      <ul className="flex flex-col gap-2">
        {data.length > 0 &&
          data.map((item) => (
            <Input
              key={item.id.value}
              name={`${item.name.first} ${item.name.last}`}
            />
          ))}
      </ul>
    </section>
  );
}

export default ChooseYourName;
