package in.energiasolutions.iot.iot;

import lombok.*;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PreUpdate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


@Entity
@Data
@NoArgsConstructor
public class Device {

    @Id
    private final String id = UUID.randomUUID().toString();

    private String name;

    @ElementCollection
    private Map<String,Boolean> switches = new HashMap<>(0);

    private LocalDateTime created = LocalDateTime.now();

    private LocalDateTime lastUpdated;

    public Device(String name, Map<String, Boolean> switches) {
        this.name = name;
        this.switches = switches;
    }

    @PreUpdate
    private void beforeUpdate(){
        lastUpdated = LocalDateTime.now();
    }

}
