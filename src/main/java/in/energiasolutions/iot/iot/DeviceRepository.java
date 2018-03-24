package in.energiasolutions.iot.iot;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DeviceRepository extends JpaRepository<Device,String> {
}
