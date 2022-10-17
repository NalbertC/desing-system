import { EnvelopeSimple, Lock } from "phosphor-react";
import React from "react";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Logo } from "./Logo";

import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-email</Text>

          <TextInput.Root>
            <React.Fragment key=".0">
              <TextInput.Icon>
                <EnvelopeSimple />
              </TextInput.Icon>
              <TextInput.Input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
              />
            </React.Fragment>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <React.Fragment key=".0">
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input
                type="password"
                id="password"
                placeholder="********"
              />
            </React.Fragment>
          </TextInput.Root>
        </label>
        <label htmlFor="remanber" className="flex items-center gap-2">
          <Checkbox />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>
      </form>
    </div>
  );
}
