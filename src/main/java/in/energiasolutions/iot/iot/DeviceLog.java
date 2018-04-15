package in.energiasolutions.iot.iot;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
public class DeviceLog {

    @Id
    private final String id = UUID.randomUUID().toString();

    private LocalDateTime created = LocalDateTime.now();

    private String key;

    private String value;

    @JsonIgnore
    @ManyToOne
    private Monitor monitor;

    public DeviceLog(String key, String value,Monitor monitor) {
        this.created = LocalDateTime.now();
        this.key = key;
        this.value = value;
        this.monitor = monitor;
    }
}
