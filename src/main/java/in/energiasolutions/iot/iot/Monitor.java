package in.energiasolutions.iot.iot;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.*;

@Entity
@Data
@NoArgsConstructor
public class Monitor {

    @Id
    private String id;

    private String name;

    private LocalDateTime created = LocalDateTime.now();

    private LocalDateTime lastUpdated;

    /*@OrderBy("created DESC")
    @ElementCollection
    private List<DeviceLog> logs = new ArrayList<>(0);*/

    public Monitor(String name) {
        this.name = name;
    }

    /*public Monitor log(String key,String value){
        this.logs.add(new DeviceLog(LocalDateTime.now(),key,value));
        return this;
    }*/

    @PreUpdate
    public void updated(){
        lastUpdated = LocalDateTime.now();
    }

    @PrePersist
    public void preSave(){
        if (id == null || id.isEmpty())
            id = UUID.randomUUID().toString();
    }
}
