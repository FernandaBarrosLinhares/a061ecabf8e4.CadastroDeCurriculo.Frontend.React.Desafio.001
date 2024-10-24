import { Grid, TextInput, Radio, Group, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import InputWithMask from "react-input-mask";
import { FormSectionTitle } from "../components/form-section-title";
import { useState } from "react";

export function FormPersonalData() {
  const [dataUser, setDataUser] = useState({
    fullName: '',
    gender: '',
    nacionality: '',
    placeBirth: '',
    birthday: '',
    email: '',
    telephone: '',
    cellPhone: '',
    website: '',
    linkedin: '',
    gitHub: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataUser((prevDataUser) => ({
      ...prevDataUser,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>
        <FormSectionTitle step={1} title="Dados Pessoais" caption="Informações Pessoais de contato" />
      </h2>
      <form>
        <Grid>
          <Grid.Col span={{ xs: 12, md: 6 }}>
            <TextInput
              withAsterisk
              type="text"
              id="fullName"
              name="fullName"
              label="Nome Completo"
              placeholder="Digite seu nome completo"
              value={dataUser.fullName}
              onChange={handleInputChange}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 6 }}>
            <Radio.Group
              withAsterisk
              label="Gênero"
              id="gender"
              name="gender"
              value={dataUser.gender}
              onChange={handleInputChange}
            >
              <Group my="xs">
                <Radio value="male" label="Masculino" />
                <Radio value="female" label="Feminino" />
                <Radio value="other" label="Outro" />
              </Group>
            </Radio.Group>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 3 }}>
            <Select
              data={["Brasileiro", "Estrangeiro"]}
              withAsterisk
              label="Nacionalidade"
              id="nacionality"
              name="nacionality"
              placeholder="Selecione sua nacionalidade"
              value={dataUser.nacionality}
              onChange={(value) => setDataUser(prev => ({ ...prev, nacionality: value }))}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 3 }}>
            <TextInput
              withAsterisk
              label="Naturalidade"
              id="placeBirth"
              name="placeBirth"
              value={dataUser.placeBirth}
              onChange={handleInputChange}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 3 }}>
            <DateInput
              withAsterisk
              valueFormat="DD/MM/YYYY"
              placeholder="DD/MM/YYYY"
              label="Data de Nascimento"
              value={dataUser.birthday}
              onChange={(value) => setDataUser(prev => ({ ...prev, birthday: value }))}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 6 }}>
            <TextInput
              label="E-mail"
              name="email"
              value={dataUser.email}
              onChange={handleInputChange}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 3 }}>
            <TextInput
              component={InputWithMask}
              mask="(99) 9999-9999"
              placeholder="(99) 9999-9999"
              label="Telefone"
              name="telephone"
              value={dataUser.telephone}
              onChange={handleInputChange}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 3 }}>
            <TextInput
              label="Celular / Whatsapp"
              component={InputWithMask}
              mask="(99) 99999-9999"
              placeholder="(99) 99999-9999"
              name="cellPhone"
              value={dataUser.cellPhone}
              onChange={handleInputChange}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 4 }}>
            <TextInput
              label="Website / Portifólio"
              name="website"
              value={dataUser.website}
              onChange={handleInputChange}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 4 }}>
            <TextInput
              label="LinkedIn"
              name="linkedin"
              value={dataUser.linkedin}
              onChange={handleInputChange}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 4 }}>
            <TextInput
              label="GitHub"
              name="gitHub"
              value={dataUser.gitHub}
              onChange={handleInputChange}
            />
          </Grid.Col>
        </Grid>
      </form>
    </div>
  );
}
