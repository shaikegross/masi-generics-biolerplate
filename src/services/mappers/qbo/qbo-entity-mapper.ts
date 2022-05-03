import { MasiEntity } from "../../../types/masi/entities/masi-entity";
import { QboEntity } from "../../../types/qbo/entities/qbo-entity";
import { MasiEntityMapper } from "../masi-entity-mapper";

export interface QboEntityMapper<MasiInternalEntity extends MasiEntity> extends MasiEntityMapper<MasiInternalEntity, QboEntity> {
  toExternal(internalEntity: MasiInternalEntity): QboEntity;
  toInternal(externalEntity: QboEntity): MasiInternalEntity;
};