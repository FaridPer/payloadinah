import { GlobalConfig } from "payload";

export const Fuentes: GlobalConfig = {
  slug: "fuentes",
  label: "Fuentes",
  fields: [
    {
      name: "primaryFont",
      label: "Nombre de la fuente primaria (Títulos y subtitulos)",
      type: "text",
      required: true,
    },
    {
      name: "primaryFontFile",
      label: "Archivo de la fuente",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "secondaryFont",
      label: "Nombre de la fuente secundaria",
      type: "text",
    },
    {
      name: "secondaryFontFile",
      label: "Archivo de la fuente secundaria (Cuerpo)",
      type: "upload",
      relationTo: "media",
    },
  ],
};


