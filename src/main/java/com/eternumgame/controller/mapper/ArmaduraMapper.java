package com.eternumgame.controller.mapper;

import com.eternumgame.domain.Armadura;
import com.eternumgame.persistence.entity.ArmaduraEntity;
import org.springframework.stereotype.Component;

@Component
public class ArmaduraMapper {

    public Armadura fromArmaduraEntityToDomain (ArmaduraEntity armaduraEntity){

        Armadura armadura = new Armadura();
        armadura.setIdArmadura(armaduraEntity.getIdArmadura());
        if(null != armaduraEntity.getCodEfectoMagico()){
            armadura.setCodEfectoMagico(armaduraEntity.getCodEfectoMagico());
        }
        armadura.setNombreArmadura(armaduraEntity.getNombreArmadura());
        armadura.setDescripcion(armaduraEntity.getDescripcion());
        armadura.setDefensaFisica(armaduraEntity.getDefensaFisica());
        armadura.setDefensaMagica(armaduraEntity.getDefensaMagica());
        armadura.setPrecioBase(armaduraEntity.getPrecioBase());
        armadura.setRutaImagen(armaduraEntity.getRutaImagen());
        armadura.setTamaño(armaduraEntity.getTamaño());
        armadura.setTipoArmaduraDescripcion(armaduraEntity.getTipoArmaduraEntity().getDescripcion());
        return armadura;
    }

    public ArmaduraEntity fromArmaduraEntityToDomain (Armadura armadura){
        ArmaduraEntity armaduraEntity = new ArmaduraEntity();
        armaduraEntity.setIdArmadura(armadura.getIdArmadura());
        armaduraEntity.setCodEfectoMagico(armadura.getCodEfectoMagico());
        armaduraEntity.setNombreArmadura(armadura.getNombreArmadura());
        armaduraEntity.setDescripcion(armadura.getDescripcion());
        armaduraEntity.setDefensaFisica(armadura.getDefensaFisica());
        armaduraEntity.setDefensaMagica(armadura.getDefensaMagica());
        armaduraEntity.setPrecioBase(armadura.getPrecioBase());
        armaduraEntity.setRutaImagen(armadura.getRutaImagen());
        armaduraEntity.setTamaño(armadura.getTamaño());
        return armaduraEntity;
    }
}
