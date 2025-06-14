import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TDataPembimbing } from "./PengajuanBimbinganForm";
import { getNameInitials } from "@/service/getNameInitials";
import { Label } from "@/components/ui/label";
import { UserX } from "lucide-react";

export default function DataPembimbingAnda({
  dataPembimbing,
}: {
  dataPembimbing: TDataPembimbing;
}) {
  const isMobile = useIsMobile();

  return (
    <React.Fragment>
      {isMobile ? (
        <Separator className="mb-6" orientation="horizontal" />
      ) : (
        <Separator className="mr-5" orientation="vertical" />
      )}
      <Card className="w-full h-fit">
        <CardContent>
          <Tabs defaultValue="promotor" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="pembimbing">PEMBIMBING</TabsTrigger>
              <TabsTrigger value="promotor">PROMOTOR</TabsTrigger>
              <TabsTrigger value="ko-promotor">KO-PROMOTOR</TabsTrigger>
            </TabsList>
            <TabsContent value="pembimbing">
              {dataPembimbing?.pembimbing ? (
                <Card>
                  <CardHeader className="flex items-center gap-2">
                    <Avatar className="h-10 w-10 rounded-lg">
                      <AvatarImage
                        src={`/image/profile-picture/${dataPembimbing?.pembimbing?.avatar}`}
                        alt="foto-profil"
                      />
                      <AvatarFallback className="rounded-lg">
                        {getNameInitials(
                          dataPembimbing?.pembimbing?.nama ?? "? ?"
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{dataPembimbing?.pembimbing?.nama}</CardTitle>
                      <CardDescription>
                        {dataPembimbing?.pembimbing?.username}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label>Email</Label>
                      <h1 className="text-sm mt-1">
                        {dataPembimbing?.pembimbing?.profil?.email}
                      </h1>
                    </div>
                    <div>
                      <Label>Alamat</Label>
                      <h1 className="text-sm mt-1">
                        {dataPembimbing?.pembimbing?.profil?.alamat}
                      </h1>
                    </div>
                    <div>
                      <Label>Nomor Telepon</Label>
                      <h1 className="text-sm mt-1">
                        {dataPembimbing?.pembimbing?.profil?.nomorTelpon}
                      </h1>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="h-52 flex flex-col items-center justify-center">
                    <h1 className="font-semibold mb-3 text-lg">
                      Belum Memilih Pembimbing
                    </h1>
                    <UserX width={70} height={70} />
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="promotor">
              {dataPembimbing?.promotor ? (
                <Card>
                  <CardHeader className="flex items-center gap-2">
                    <Avatar className="h-10 w-10 rounded-lg">
                      <AvatarImage
                        src={`/image/profile-picture/${dataPembimbing?.promotor?.avatar}`}
                        alt="foto-profil"
                      />
                      <AvatarFallback className="rounded-lg">
                        {getNameInitials(
                          dataPembimbing?.promotor?.nama ?? "? ?"
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{dataPembimbing?.promotor?.nama}</CardTitle>
                      <CardDescription>
                        {dataPembimbing?.promotor?.username}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label>Email</Label>
                      <h1 className="text-sm mt-1">
                        {dataPembimbing?.promotor?.profil?.email}
                      </h1>
                    </div>
                    <div>
                      <Label>Alamat</Label>
                      <h1 className="text-sm mt-1">
                        {dataPembimbing?.promotor?.profil?.alamat}
                      </h1>
                    </div>
                    <div>
                      <Label>Nomor Telepon</Label>
                      <h1 className="text-sm mt-1">
                        {dataPembimbing?.promotor?.profil?.nomorTelpon}
                      </h1>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="h-52 flex flex-col items-center justify-center">
                    <h1 className="font-semibold mb-3 text-lg">
                      Belum Memiliki PROMOTOR
                    </h1>
                    <UserX width={70} height={70} />
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="ko-promotor">
              {dataPembimbing?.koPromotor ? (
                <Card>
                  <CardHeader className="flex items-center gap-2">
                    <Avatar className="h-10 w-10 rounded-lg">
                      <AvatarImage
                        src={`/image/profile-picture/${dataPembimbing?.koPromotor?.avatar}`}
                        alt="foto-profil"
                      />
                      <AvatarFallback className="rounded-lg">
                        {getNameInitials(
                          dataPembimbing?.koPromotor?.nama ?? "? ?"
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{dataPembimbing?.koPromotor?.nama}</CardTitle>
                      <CardDescription>
                        {dataPembimbing?.koPromotor?.username}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label>Email</Label>
                      <h1 className="text-sm mt-1">
                        {dataPembimbing?.koPromotor?.profil?.email}
                      </h1>
                    </div>
                    <div>
                      <Label>Alamat</Label>
                      <h1 className="text-sm mt-1">
                        {dataPembimbing?.koPromotor?.profil?.alamat}
                      </h1>
                    </div>
                    <div>
                      <Label>Nomor Telepon</Label>
                      <h1 className="text-sm mt-1">
                        {dataPembimbing?.koPromotor?.profil?.nomorTelpon}
                      </h1>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="h-52 flex flex-col items-center justify-center">
                    <h1 className="font-semibold mb-3 text-lg">
                      Belum Memiliki KO-PROMOTOR
                    </h1>
                    <UserX width={70} height={70} />
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
