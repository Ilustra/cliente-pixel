"use client";
import React, { useEffect } from "react";
import { useService } from "../src/service/user.service";

export default function HomePage() {

    const service = useService();

    useEffect(() => {
        service.findAll().then((response) => {
            console.log("Usuários encontrados:", response);
        }).catch((error) => {
            console.error("Erro ao buscar usuários:", error);
        });
    }, []);
    return (
        <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1>Bem-vindo ao Cliente Pixel</h1>
            <p>
                Esta é a página inicial do seu aplicativo. Explore as funcionalidades e aproveite!
            </p>
        </main>
    );
}