
import type { CollectionConfig } from 'payload'

export const practicas: CollectionConfig = 
{
    slug:'practias-servicio',
    admin: {
      useAsTitle: 'nombre_programa'
    },
    fields:[
      {
        name: 'nombre_programa',
        type: 'text',
      },
      {
        name: 'num_programa',
        type: 'text',
      },
      {
        name: 'descripcion_programa',
        type: 'textarea',
      },
      {
        name: 'coord_programa',
        type: 'text',
      },
      {
        name: 'telefono_coord',
        type: 'text',
      },
      {
        name: 'correo_coord',
        type: 'text'
      },
      {
        name: 'perfil_educativo',
        type: 'richText'
      }
    ]
    }