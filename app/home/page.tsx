"use client";
import React, { useEffect, useState } from "react";
import { useService } from "../src/service/user.service";

export default function HomePage() {
    const [list, setList] = useState<any[]>([]);
    const service = useService();

    useEffect(() => {
        service.findAll().then((response: any) => {
            console.log("Usuários encontrados:", response);
            setList(response);
        }).catch((error) => {
            console.error("Erro ao buscar usuários:", error);
        });
    }, []);
    return (
        <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1>Bem-vindo ao Cliente Pixel Listagem API 1 1</h1>
            <ul>
                {list.map((user, index) => (
                    <li key={index}>
                        Nome: {user.nome} | Username: {user.username}
                    </li>
                ))}
            </ul>
        </main>
    );
}