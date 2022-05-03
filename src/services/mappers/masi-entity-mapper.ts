import { ExternalEntity } from "../../types/masi/entities/external-entity";
import { MasiEntity } from "../../types/masi/entities/masi-entity";

export interface MasiEntityMapper<MasiInternalEntity extends MasiEntity = MasiEntity, MasiExternalEntity extends ExternalEntity = ExternalEntity> {
  toInternal(externalEntity: MasiExternalEntity): MasiInternalEntity;
  toExternal(internalEntity: MasiInternalEntity): MasiExternalEntity;
}