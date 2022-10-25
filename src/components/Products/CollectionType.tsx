import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { useStore } from "../../context/context";
import Button from "../ui/Button";

const CollectionType: React.FC = () => {
  const { collectionType, setCollectionType } = useStore();
  return collectionType === "table" ? (
    <Button
      onClick={() => setCollectionType("grid")}
      text="Collection Type"
      icon={<ListBulletIcon className="mr-2 h-5 w-5" />}
    />
  ) : (
    <Button
      onClick={() => setCollectionType("table")}
      text="Collection Type"
      icon={<Squares2X2Icon className="mr-2 h-5 w-5" />}
    />
  );
};

export default CollectionType;
