import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayes } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";

import { FlatList } from "react-native";
import { useState } from "react";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([
    "Giovani",
    "Neguinho",
    "Teste",
    "adfs",
    "asdoklgfjwsoig",
    "idohjgod",
    "öujisdhbv",
    "oasijdhfsojfhj",
    "oaidhps[oi",
  ]);
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayes>{players.length}</NumberOfPlayes>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100, marginBottom: 6 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover Turma" type="SECUNDARY" />
    </Container>
  );
}