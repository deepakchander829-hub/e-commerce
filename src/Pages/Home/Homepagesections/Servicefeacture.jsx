import Faqbtn from "../../../Components/Faqbtn";

const shoppingBenefits = [
  {
    icon: "bi-truck",
    title: "Free Shipping",
    description: "On orders above ₹999",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Easy Returns",
    description: "7-day easy returns",
  },
  {
    icon: "bi-shield-check",
    title: "Secure Checkout",
    description: "100% secure payments",
  },
  {
    icon: "bi-headset",
    title: "24/7 Support",
    description: "We're here to help",
  },
];

const Servicefeacture = () => {
  return (

    <section
      className="container-fluid ps-2 px-lg-5"
      aria-label="Shopping benefits"
    >


      <div className="row g-3 g-lg-4">



        {shoppingBenefits.map(function (benefit, index, id) {
          return (
            <div className="col-6 col-lg-3">
              <Faqbtn
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                key={id}
              />
            </div>
          );
        })}


      </div>
    </section>
  );
};

export default Servicefeacture;
