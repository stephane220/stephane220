"use client";

// =============================
// Admin – Chauffeurs CRUD
// =============================

// app/admin/chauffeurs/page.tsx
import { useState } from "react";

export default function ChauffeursPage() {
  const [chauffeurs] = useState([
    { id: 1, nom: "KONE", prenom: "Ali", telephone: "07000000", statut: "En attente" },
    { id: 2, nom: "TRAORE", prenom: "Moussa", telephone: "05000000", statut: "Validé" },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-orange-600 mb-6">Chauffeurs</h1>

      <table className="w-full bg-white rounded-xl shadow">
        <thead className="bg-orange-100">
          <tr>
            <th className="p-3 text-left">Nom</th>
            <th className="p-3 text-left">Téléphone</th>
            <th className="p-3 text-left">Statut</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {chauffeurs.map((c) => (
            <tr key={c.id} className="border-t">
              <td className="p-3">{c.nom} {c.prenom}</td>
              <td className="p-3">{c.telephone}</td>
              <td className="p-3">{c.statut}</td>
              <td className="p-3 space-x-2">
                <button className="px-3 py-1 bg-green-500 text-white rounded">Valider</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded">Suspendre</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// =============================
// Admin – Villes CRUD
// =============================

// app/admin/villes/page.tsx
export function VillesPage() {
  const villes = ["Abidjan", "Bouaké", "Yamoussoukro"];

  return (
    <div>
      <h1 className="text-2xl font-bold text-orange-600 mb-6">Villes</h1>

      <ul className="bg-white rounded-xl shadow p-6 space-y-3">
        {villes.map((ville, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{ville}</span>
            <button className="text-red-500">Supprimer</button>
          </li>
        ))}
      </ul>

      <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded">
        Ajouter une ville
      </button>
    </div>
  );
}

// =============================
// Admin – Partenaires CRUD
// =============================

// app/admin/partenaires/page.tsx
export function PartenairesPage() {
  const partenaires = [
    { id: 1, nom: "Orange CI" },
    { id: 2, nom: "MTN" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-orange-600 mb-6">Partenaires</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partenaires.map((p) => (
          <div key={p.id} className="bg-white p-6 rounded-xl shadow">
            <p className="font-semibold">{p.nom}</p>
            <button className="mt-4 text-red-500">Supprimer</button>
          </div>
        ))}
      </div>

      <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded">
        Ajouter un partenaire
      </button>
    </div>
  );
}
