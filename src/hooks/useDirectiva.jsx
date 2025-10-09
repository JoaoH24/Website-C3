// src/hooks/useJuntaDirectiva.js
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export function useDirectiva() {
  const [Members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "Junta Directiva"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMembers(data);
      } catch (error) {
        console.error("Error al obtener la junta directiva:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { Members, loading };
}
