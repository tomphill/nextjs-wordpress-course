import { faBath, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import numeral from "numeral";

export const PropertyFeatures = ({
  hasParking,
  petFriendly,
  bedrooms,
  bathrooms,
  price,
}) => {
  return (
    <div className="max-w-lg mx-auto my-10 bg-white text-slate-900 p-5 text-center">
      <div className="grid grid-cols-2 mb-4 gap-y-5">
        <div>
          <FontAwesomeIcon icon={faBed} /> {bedrooms} bedrooms
        </div>
        <div>
          <FontAwesomeIcon icon={faBath} /> {bathrooms} bathrooms
        </div>
        <div>
          {!!petFriendly && (
            <>
              <FontAwesomeIcon icon={faDog} /> pet friendly
            </>
          )}
        </div>
        <div>
          {!!hasParking && (
            <>
              <FontAwesomeIcon icon={faCar} /> parking available
            </>
          )}
        </div>
      </div>
      <h3 className="text-5xl font-bold">£{numeral(price).format("0,0")}</h3>
    </div>
  );
};
