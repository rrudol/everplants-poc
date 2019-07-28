import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "../components/Firebase";

function useCollection(path, Class) {
  const [collection, ...rest] = useCollectionData(
    firebase.firestore().collection(path),
    {
      idField: "id"
    }
  );
  if (!Class || !collection) {
    return [collection, ...rest];
  } else {
    return [
      collection.map(
        el => new Class(el, firebase.firestore().collection(path), path)
      ),
      ...rest
    ];
  }
}

export default useCollection;
