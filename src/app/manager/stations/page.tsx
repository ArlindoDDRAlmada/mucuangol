"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { stationStatusData as stations } from "../data/mock-data";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../../../components/ui/table";
import { Progress } from "../../../components/ui/progress"; // Make sure this path is correct
import { Badge } from "../../../components/ui/badge";

// Helper function to get progress bar color based on level
const getProgressBarColor = (level: number) => {
  if (level > 50) return "bg-green-500";
  if (level > 20) return "bg-yellow-500";
  return "bg-red-500";
};

export default function StationsPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Gestão de Postos de Abastecimento</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Nome da Estação</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Nível de Gasóleo</TableHead>
                <TableHead>Nível de Gasolina</TableHead>
                <TableHead className="text-right">Valor Arrecadado</TableHead>
                <TableHead className="text-right">Perdas</TableHead>
                <TableHead className="text-right">Última Atualização</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stations.map((station) => (
                <TableRow key={station.id}>
                  <TableCell className="font-medium">{station.name}</TableCell>
                  <TableCell>{station.location}</TableCell>
                  <TableCell>
                    <Badge
                      className={`${
                        station.status === "Operacional" && "bg-green-500"
                      } ${station.status === "Manutenção" && "bg-yellow-500"} ${
                        station.status === "Offline" && "bg-red-500"
                      }`}
                    >
                      {station.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress
                        value={station.dieselLevel}
                        className={`w-[60%] ${getProgressBarColor(
                          station.dieselLevel
                        )}`}
                      />
                      <span>{station.dieselLevel}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress
                        value={station.gasolineLevel}
                        className={`w-[60%] ${getProgressBarColor(
                          station.gasolineLevel
                        )}`}
                      />
                      <span>{station.gasolineLevel}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="font-medium text-green-600">
                      {station.dailyRevenue.toLocaleString()} AOA
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="font-medium text-red-600">
                      {station.losses.toLocaleString()} AOA
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    {new Date(station.lastUpdate).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
