package in.energiasolutions.iot.iot;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


@Entity
@Data
@NoArgsConstructor
public class Device {

    @Id
    private String id;

    private String name;

    @ElementCollection
    private Map<String,Boolean> switches = new HashMap<>(0);

    private LocalDateTime created = LocalDateTime.now();

    private LocalDateTime lastUpdated;

    @Enumerated(EnumType.STRING)
    private Type type = Type.CONTROL;

    public Device(String name, Map<String, Boolean> switches) {
        this.name = name;
        this.switches = switches;
    }

    @PreUpdate
    public void updated(){
        lastUpdated = LocalDateTime.now();
    }

    @PrePersist
    public void preSave(){
        if (id == null || id.isEmpty())
            id = UUID.randomUUID().toString();
    }

    private enum Type
    {
        PARKING, CONTROL
    }

}
