import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackIcoin, BackButton } from "./styles";

import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcoin />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
