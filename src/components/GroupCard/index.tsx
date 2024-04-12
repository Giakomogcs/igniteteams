import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title }: Props) {
  return (
    <Container>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
