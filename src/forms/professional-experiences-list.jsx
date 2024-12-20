import { PropTypes } from "prop-types";
import {
  Card,
  Stack,
  Title,
  Accordion,
  Divider,
  Grid,
  Text,
} from "@mantine/core";
import { CustomAccordionControl } from "../components/custom-accordion-control";
import { DataBlock } from "../components/data-block";

export const ProfessionalExperiencesList = ({ experiences }) => {
  return (
    <Card withBorder mt="md">
      <Stack>
        <Title order={3} size="h6">
          Experiências ({experiences.length})
        </Title>
        {experiences.length === 0 && (
          <Text fw={300} size="sm">
            Nenhuma experiência profissional cadastrada
          </Text>
        )}
        <Accordion chevronPosition="left" variant="contained">
          {experiences.map((experience) => (
            <Accordion.Item key={experience.id} value={experience.id.toString()}>
              <CustomAccordionControl>
                <DataBlock label="Empresa" value={experience.companyName} />
              </CustomAccordionControl>
              <Accordion.Panel>
                <Divider mb="xl" />
                <Grid>
                  <Grid.Col span={{ xs: 12, md: 6 }}>
                    <DataBlock label="Cargo" value={experience.jobTitle} />
                  </Grid.Col>
                  <Grid.Col span={{ xs: 12, md: 3 }}>
                    <DataBlock label="Data de início" value={experience.startDate} />
                  </Grid.Col>
                  <Grid.Col span={{ xs: 12, md: 3 }}>
                    <DataBlock label="Data da saída" value={experience.endDate} />
                  </Grid.Col>
                  <Grid.Col span={12} align="flex-end">
                    <DataBlock label="Descrição da atividade" value={experience.description} />
                  </Grid.Col>
                </Grid>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    </Card>
  );
};

ProfessionalExperiencesList.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
