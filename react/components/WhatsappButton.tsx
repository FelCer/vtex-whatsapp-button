import React from "react";
import PropTypes from 'prop-types'

type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
    const formatMessage = message.replace(/ /g, "%20")
    return (
        <div className="fixed bottom-2 right-2 flex flexColumn z-3">
            <a
                href={`https://wa.me/${phone}?text=${formatMessage}`}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                    src={logo}
                    alt={message}
                    width={width}
                    height={height}
                />
            </a>
        </div>
    )
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

WhatsappButton.defaultProps = {
    logo: "logo.png",
    phone: "3203205566",
    message: "Hola desde el componente directamente",
    width: 100,
    height: 100
}

WhatsappButton.schema = {
    title: "Botón de whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de Whatsapp",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Teléfono",
            type: "string",
            description: "Agrega por favor, el número de teléfono"
        },
        message: {
            title: "Mensaje",
            type: "string",
            description: "Agrega por favor, el mensaje que quieres para tu cliente",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "Logo de Whatsapp",
            type: "string",
            description: "Agrega por favor, el ancho del logo",
        },
        height: {
            title: "Logo de Whatsapp",
            type: "string",
            description: "Agrega por favor, el alto del logo",
        }
    }
}

export default WhatsappButton;