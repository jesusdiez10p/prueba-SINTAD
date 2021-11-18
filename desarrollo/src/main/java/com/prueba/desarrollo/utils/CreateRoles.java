package com.prueba.desarrollo.utils;
import com.prueba.desarrollo.security.entity.Rol;
import com.prueba.desarrollo.security.enums.RolNombre;
import com.prueba.desarrollo.security.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CreateRoles implements CommandLineRunner{
    @Autowired
    RolService rolService;

    @Override
    public void run(String... args) throws Exception {
        //SOLO SE DEBE EJECUTAR UNA VEZ LO SIGUIENTE, LUEGO COMENTARLO DE VUELTA
         /*Rol rolAdmin = new Rol(RolNombre.ROLE_ADMIN);
        Rol rolUser = new Rol(RolNombre.ROLE_USER);
        rolService.save(rolAdmin);
        rolService.save(rolUser);*/
         
    }
}
